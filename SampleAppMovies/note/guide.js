import { NativeModules } from 'react-native';

const CalendarManager = NativeModules.CalendarManager;

CalendarManager.addEvent('Birthday Party', '4 Privet Drive,Surrey');

let date = Date.now;
CalendarManager.addEvent(
    'Birthday Party',
    '4 Privet Drive, Surrey',
    date.getTime(),
    );

CalendarManager.addEvent('Birthday Party',{
    location: '4 Privet Drive, Surrey',
    time: date.getTime(),
    description: '...'
});