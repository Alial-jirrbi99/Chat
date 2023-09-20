export const VALIDATION_RULES = {
  name: {
    required: "name is required",
    minLength: {
      value: 3,
      message: "name must be at least 3 characters",
    },
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },

    pattern: {
      // value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
      // message: "uppercase, lowercase, number and special",
      message: "Invalid password"
    },
  },
}
