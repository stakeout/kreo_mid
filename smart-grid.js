const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1320px',
        fields: '30px'
    },
    breakPoints: {
        lg: {
            width: '992px'
        },
        md: {
            width: '768px'
        },
        sm: {
            width: '767px'
        },
        xs: {
            width: '480px',
            fields: '15px'
        },
        xxs: {
            width: '320px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
