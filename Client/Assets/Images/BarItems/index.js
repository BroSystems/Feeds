export default (item) => {
    switch (item) {
        case 'feeds':
            return require('./bar_item_feeds.png');
        case 'feedsSelected':
            return require('./bar_item_feeds_selected.png');
        case 'explore':
            return require('./bar_item_explore.png');
        case 'exploreSelected':
            return require('./bar_item_explore_selected.png');
    };
};