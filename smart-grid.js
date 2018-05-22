const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1200px',
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
            width: '576px'
        },
        xs: {
            width: '480px'
        },
        xxs: {
            width: '320px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
