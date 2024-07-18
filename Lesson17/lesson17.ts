//error handling
function handleException(erroMessage: string): never {
    throw new Error(erroMessage);
}

handleException("Something went wrong");

// infinite loop
function runInfinity(): never {
  while (true) {
    console.log("Running...");
  }
}