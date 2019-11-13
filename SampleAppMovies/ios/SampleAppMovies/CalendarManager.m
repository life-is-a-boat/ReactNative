//
//  CalendarManager.m
//  SampleAppMovies
//
//  Created by ting on 2019/11/7.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE(CalendarManager)

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch) {
  NSDate *date = [RCTConvert NSData:secondsSinceUnixEpoch];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details) {
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
}

@end
