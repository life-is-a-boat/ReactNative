//
//  CalendarManager.m
//  SampleAppMovies
//
//  Created by ting on 2019/11/7.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE(ATCalendarManager)

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
