
const errorMessage = (msg: string) => ({msg});

const isBlank = (value: any) => ((!value || value === null || value === '') ? true : false);

/**
 * Util functions
 */
export const utils = {
  errorMessage,
  isBlank
}