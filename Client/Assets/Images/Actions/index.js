export default (type) => {
    switch (type) {
        case 'btnLike':
            return require('./btn_like.png');
        case 'btnLikeSelected':
            return require('./btn_like_selected.png');
        case 'btnJoin':
            return require('./btn_join_group.png');
        case 'btnJoinSelected':
            return require('./btn_join_group_selected.png');
    }
};