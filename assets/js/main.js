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
             * Draggable
             */

            var draggable = $('[data-draggable="true"]', component_epg);

            if (draggable.length > 0)
            {
                draggable.kinetic();
            }

            /*
             * Initialize
             */

            var now = component_epg.data('now');
        }
    }
};