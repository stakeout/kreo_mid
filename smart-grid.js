const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1200px',
        fields: '15px'
    },
    breakPoints: {
        lg: {
            width: '992px',
            fields: '15px'
        },
        md: {
            width: '768px',
            fields: '15px'
        },
        sm: {
            width: '576px',
            fields: '15px'
        },
        xs: {
            width: '480px',
            fields: '15px'
        },
        xxs: {
            width: '320px',
            fields: '15px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
