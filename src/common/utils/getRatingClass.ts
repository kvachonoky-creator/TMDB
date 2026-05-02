export const getRatingClass = (rating: number) => {
    if (rating >= 7) return 'ratingGreen'
    if (rating >= 5.5) return 'ratingYellow'
    return 'ratingRed'
}