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
            var draggable = $('[data-draggable="true"]', component_epg);

            if (draggable.length > 0)
            {
                //draggable.kinetic();
            }
        }
    }
};