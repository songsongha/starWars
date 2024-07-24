export const titleCase = (str?: string) => {
    if (!str) return ''
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export const colorArray = [
    '#FFFFFF', // White
    '#FFD8B1', // Light Apricot
    '#F4CCCC', // Light Coral
    '#EAD1DC', // Light Mauve
    '#D5A6BD', // Light Orchid Pink
    '#B4A7D6', // Light Lavender
    '#A2C4C9', // Light Aquamarine
    '#C2D69B', // Light Moss Green
    '#D9EAD3', // Light Pastel Green
    '#E6B8AF', // Light Salmon
    '#A9D0F5', // Light Cornflower Blue
    '#B7BCB5', // Light Grayish Olive
    '#FFBC9B', // Light Peach
    '#EAD1DC', // Light Lavender Blush
    '#A8E6CE', // Light Seafoam Green
    '#C7CEEA', // Light Periwinkle
    '#BDFCC9', // Light Mint
    '#9FC5E8', // Light Sky Blue
    '#FFB300', // Vivid Yellow
    '#803E75', // Strong Purple
    '#FF6800', // Vivid Orange
    '#A6BDD7', // Very Light Blue
    '#C10020', // Vivid Red
    '#CEA262', // Grayish Yellow
    '#817066', // Medium Gray
    '#007D34', // Vivid Green
    '#F6768E', // Strong Purplish Pink
    '#00538A', // Strong Blue
    '#FF7A5C', // Strong Yellowish Pink
    '#53377A', // Strong Violet
    '#FF8E00', // Vivid Orange Yellow
    '#B32851', // Strong Purplish Red
    '#F4C800', // Vivid Greenish Yellow
    '#7F180D', // Strong Reddish Brown
    '#93AA00', // Vivid Yellowish Green
    '#593315', // Deep Yellowish Brown
    '#F13A13', // Vivid Reddish Orange
    '#232C16' // Dark Olive Green
]
