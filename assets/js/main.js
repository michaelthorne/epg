/* ==========================================================================
   Main
   ========================================================================== */

var main = {

    init: function ()
    {
        /*
         * Components
         */

        components.epg();
    }
};

/* ==========================================================================
   Components
   ========================================================================== */

var components = {

    /* EPG
       ========================================================================== */

    epg: function ()
    {
        var component_epg = $('[data-component="epg"]');

        if (component_epg.length > 0)
        {
            /*
             * Initialize
             */

            var epg_start = component_epg.data('start');
            var epg_grid = $('.epg-grid', component_epg);
            var epg_grid_scroll = 0;

            if (typeof epg_start !== 'undefined' && epg_start !== '')
            {
                // Scroll the grid to the specified starting point
                epg_grid.stop(true, true).animate({
                    scrollLeft: epg_start - 120
                }, 500);
            }

            /**
             * Controls
             */

            var action_prev = $('[data-action="prev"]', component_epg);
            var action_next = $('[data-action="next"]', component_epg);

            /* Previous */
            action_prev.on('click', function (e)
            {
                e.preventDefault();

                scrollEPG(-Math.abs(240));
            });

            /* Next */
            action_next.on('click', function (e)
            {
                e.preventDefault();

                scrollEPG(240);
            });

            /*
             * Draggable
             */

            var draggable = $('[data-draggable="true"]', component_epg);

            if (draggable.length > 0)
            {
                draggable.kinetic();
            }

            /**
             * Scroll the EPG grid the specified distance
             */

            function scrollEPG(distance)
            {
                epg_grid_scroll = epg_grid.scrollLeft();

                epg_grid.stop(true, true).animate({
                    scrollLeft: epg_grid_scroll + distance
                }, 500);
            }
        }
    }
};