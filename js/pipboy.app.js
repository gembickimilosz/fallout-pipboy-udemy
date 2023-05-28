/** Created by Milosz Gembicki on 2023-05-26 */

$(document).ready(function () {
    var weapons = [{
        "name": "44_pistol",
        "damage": 48,
        "ammo": 500,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "damage": 18,
        "ammo": 500,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "damage": 30,
        "ammo": 500,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }];

    $('.item-list a').on('click', function (e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    })

    $(window).ready(function (e) {

        var current_item_stats = $('.item-list a.active').attr('class');

        current_item_stats = current_item_stats.replace(' active', '');

        for (item in weapons) {
            if (weapons[item].name == current_item_stats) {
                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                var container = $('.item-stats');
                container.find('.ammo').html(weapons[item].ammo);
                var container = $('.item-stats');
                container.find('.fire_rate').html(weapons[item].fire_rate);
                var container = $('.item-stats');
                container.find('.range').html(weapons[item].range);
                var container = $('.item-stats');
                container.find('.accuracy').html(weapons[item].accuracy);
                var container = $('.item-stats');
                container.find('.weight').html(weapons[item].weight);
                var container = $('.item-stats');
                container.find('.value').html(weapons[item].value);
            }
        }
    })

    $('.item-list a').on('mouseenter', function (e) {

        var current_item = $(e.currentTarget).attr('class');

        for (item in weapons) {
            if (weapons[item].name == current_item) {
                console.log(weapons[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                var container = $('.item-stats');
                container.find('.ammo').html(weapons[item].ammo);
                var container = $('.item-stats');
                container.find('.fire_rate').html(weapons[item].fire_rate);
                var container = $('.item-stats');
                container.find('.range').html(weapons[item].range);
                var container = $('.item-stats');
                container.find('.accuracy').html(weapons[item].accuracy);
                var container = $('.item-stats');
                container.find('.weight').html(weapons[item].weight);
                var container = $('.item-stats');
                container.find('.value').html(weapons[item].value);
            }
        }
    })
});