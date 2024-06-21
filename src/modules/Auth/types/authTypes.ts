export type LoginTypes = {
  email: string;
  password: string;
};

export type ErrorType = {
  status: string;
  data: {
    message: string;
  };
};
