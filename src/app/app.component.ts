import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'draggable';

    widgets = [
        {
            config: {
                resizable: true,
                col: 1,
                row: 1,
                sizey: 5,
                minRows: 2,
                dragHandle: '.widget-header',
                payload: 1,
                // minRows: 4,
            },
            title: 'Recent Trades',
            component: 'app-times-and-sales',
            maximise: false,
            visible: true,
        },
        {
            config: {
                resizable: true,
                col: 2,
                row: 1,
                sizex: 3,
                sizey: 4,
                dragHandle: '.widget-header',
                payload: 2,
                minRows: 2,
                debug: true
            },
            title: 'Chart',
            component: 'app-chart',
            maximise: false,
            visible: true,
        },
        // {
        //     config: {
        //         resizable: true,
        //         col: 5,
        //         row: 1,
        //         // sizex: 2,
        //         sizey: 6,
        //         minRows: 2,
        //         dragHandle: '.widget-header',
        //         payload: 3
        //     },
        //     title: '',
        //     component: 'app-ladder',
        //     maximise: false,
        //     visible: false
        // },
        {
            config: {
                resizable: true,
                col: 5,
                row: 1,
                // sizex: 3,
                sizey: 5,
                minRows: 2,
                dragHandle: '.widget-header',
                payload: 3,
            },
            title: 'Order Book',
            component: 'app-depth',
            maximise: false,
            visible: true
        },
        {
            config: {
                resizable: true,
                col: 6,
                row: 1,
                // sizex: 3,
                sizey: 5,
                minRows: 2,
                dragHandle: '.widget-header',
                payload: 3,
            },
            title: 'Order Book',
            component: 'app-depth',
            maximise: false,
            visible: true
        },
    ];

    WIDGET_CONTAINER_FORMATINGS = {
        margins: [5,5,5,5],
        max_cols: 6,
        cascade: 'left',
        auto_resize: true,
        row_height: (screen.availHeight - 50 - 80 - 70) / 7,
        min_height: (screen.availHeight - 50 - 80 - 70) / 7,
        debug: true,
        limit_to_screen: true
    };


}
