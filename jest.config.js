export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "services/**/*.js",
    "secure-config.js",
    "main.js",
    "strategies/**/*.js",
    "renderer/src/pages/**/*.jsx"
  ],
  coverageDirectory: "<rootDir>/coverage"
};
