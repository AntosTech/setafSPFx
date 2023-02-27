import { InstancePlugin, GridFeatureManager, DomSync } from "../../node_modules/@bryntum/scheduler/scheduler.module.js";


export default class Icons extends InstancePlugin {
    static get $name() {
        return 'icons';
    }

    static get type() {
        return 'icons';
    }

    // Plugin configuration. This plugin chains some of the functions in Scheduler.
    static get pluginConfig() {
        return {
            chain : ['onEventDataGenerated']
        };
    }

    onEventDataGenerated({ eventRecord, eventContent, children }) {

        const icons = eventRecord.EventTags.map(tag => tag.Icon);

        if (icons.length) {

            eventContent.children = eventContent.children || [];

            icons.forEach(icon => {
                eventContent.children.unshift({
                    tag       : 'i',
                    className : 'b-fa ' + icon
                });
            });

            const childContent = {
                tag  : 'div',
                html : eventContent.html
            };

            eventContent.children.push(childContent);
            eventContent.html = null;
        }
    }
}

GridFeatureManager.registerFeature(Icons, true, 'Scheduler');

