export default (heroId) => {
    return {
        type: 'SELECT_HERO',
        heroId: heroId
    }
};
