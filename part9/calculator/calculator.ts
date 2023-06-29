export type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number;

export const calculator = (
  a: number,
  b: number,
  op: Operation
): Result | null => {
  try {
    switch (op) {
      case 'multiply':
        return a * b;
      case 'add':
        return a + b;
      case 'divide':
        return a / b;
      default:
        throw new Error('Operation is not multiply, add or divide!');
    }
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong: ';
    // here we can not use error.message
    if (error instanceof Error) {
      // the type is narrowed and we can refer to error.message
      errorMessage += error.message;
    }
    // here we can not use error.message

    console.log(errorMessage);
    return null;
  }
};

// console.log(process.argv);
