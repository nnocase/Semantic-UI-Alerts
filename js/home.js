$(document).ready(function() {
});

new Vue({
    el: '#app',
    data: {
        Title: 'Semantic UI Alerts',
        Description: 'A message displays information that explains nearby content',
        Type: 'info',
        Time : 3,
        Direction: 'top',
        Side: 'right',
    },
    methods: {
        showAlert: function () {
            that = this;
            $.suiAlert({
                title : that.Title,
                description : that.Description,
                type : that.Type,
                time : that.Time,
                position : that.Direction+'-'+that.Side,
                // icon : "ban",
            });
        },
    }
});