import '@testing-library/jest-dom/extend-expect'

// eslint-disable-next-line no-undef
jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub' // whatever
  },
}))
