
export const getFullYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

export const getFooterCopy = (isIndex) => {
    if (isIndex) {
      return 'Holberton School'
    }else {
     return 'Holberton School main dashboard'
    }
}
