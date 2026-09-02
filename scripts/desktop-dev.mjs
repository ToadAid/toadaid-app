import { spawn } from "node:child_process";

const childEnvironment = { ...process.env };

if (process.platform === "linux") {
  const scalarVariables = [
    "GTK_EXE_PREFIX",
    "GIO_MODULE_DIR",
    "GDK_PIXBUF_MODULE_FILE",
    "GSETTINGS_SCHEMA_DIR",
    "FONTCONFIG_PATH",
    "XDG_DATA_HOME",
    "XDG_CONFIG_HOME",
    "XDG_CACHE_HOME",
  ];

  const pathListVariables = [
    "GTK_PATH",
    "GIO_EXTRA_MODULES",
    "GI_TYPELIB_PATH",
    "XDG_DATA_DIRS",
    "XDG_CONFIG_DIRS",
  ];

  for (const name of scalarVariables) {
    const value = childEnvironment[name];
    if (value?.includes("/snap/")) {
      delete childEnvironment[name];
    }
  }

  for (const name of pathListVariables) {
    const value = childEnvironment[name];
    if (!value) {
      continue;
    }

    const parts = value.split(":");
    const keptParts = parts.filter((part) => !part.includes("/snap/"));
    if (keptParts.length === parts.length) {
      continue;
    }

    if (keptParts.length > 0) {
      childEnvironment[name] = keptParts.join(":");
    } else {
      delete childEnvironment[name];
    }
  }
}

const child = spawn(
  "cargo",
  ["run", "--manifest-path", "src-tauri/Cargo.toml", "--locked"],
  {
    env: childEnvironment,
    shell: false,
    stdio: "inherit",
  },
);

const signals = ["SIGINT", "SIGTERM"];
const handlers = new Map(
  signals.map((signal) => [signal, () => child.kill(signal)]),
);

for (const [signal, handler] of handlers) {
  process.on(signal, handler);
}

const removeSignalHandlers = () => {
  for (const [signal, handler] of handlers) {
    process.off(signal, handler);
  }
};

child.once("error", (error) => {
  removeSignalHandlers();
  console.error(`Unable to launch the bounded Pond desktop host: ${error.message}`);
  process.exitCode = 1;
});

child.once("exit", (code, signal) => {
  removeSignalHandlers();

  if (code !== null) {
    process.exitCode = code;
    return;
  }

  process.exitCode = signal === "SIGINT" ? 130 : signal === "SIGTERM" ? 143 : 1;
});
