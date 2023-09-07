export function displayRangeOfItems(array, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, array.length)

  const totalItems = array.length

  const startItemNumber = startIndex + 1
  const endItemNumber = endIndex

  const message = `${startItemNumber} - ${endItemNumber} of ${totalItems}`

  return message
}
