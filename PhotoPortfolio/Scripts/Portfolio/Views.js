var About = Backbone.View.extend({
    el: '.page',
    render: function () {
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) { options.url = "http://localhost:59397" + options.url; });

        var users = new UserCollection();
        var that = this;
        users.fetch({
            success: function () {
                var template = _.template($('#users-list-template').html(), { text: users.bio });
                that.$el.html(template);
            }
        });
    }
});

var EditUser = Backbone.View.extend({
    el: '.page',

    render: function (options) {
        var that = this;
        if (options.id) {
            console.log('options is : ' + options);
            console.log('options id is : ' + options.id);
            var user = new User({ id: options.id });
            that.user = user;
            user.fetch({
                success: function (user) {
                    console.log('user is : ' + user);
                    console.log('firstName is : ' + user.FirstName + '  -  ' + user.get('FirstName'));

                    var template2 = _.template($('#edit-list-template').html(), { user: user });
                    that.$el.html(template2);
                }
            });
        } else {
            var template = _.template($('#edit-list-template').html(), { user: null });
            this.$el.html(template);
        }
    },

    events: { 'submit .edit-user-form': 'saveUser', 'click .delete': 'deleteUser' },
    deleteUser: function (ev) {
        this.user.destroy({ success: function () { router.navigate('', { trigger: true }); } });
        return false;
    },

    saveUser: function (ev) {
        var userData = serializeObject($(ev.currentTarget));
        var user = new User();
        user.save(userData, {
            success: function () {
                router.navigate('', { trigger: true });
            }
        });
        return false;
    },
});
