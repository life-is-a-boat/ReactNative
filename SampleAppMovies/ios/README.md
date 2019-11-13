#  与原生端通信
>在React Native中，一个`原生模块`就是一个实现了`RCTBridgeModule`协议的Objective-C类，其中RCT是ReaCT的缩写。
```Objective-C
#import <React/RCTBridgeModule.h>
@interface CalendarManager: NSObject <RCTBridgeModule>
@end
```
>为了实现RCTBridgeModule协议，你的类需要包含`RCT_EXPORT_MODULE()`宏。这个宏也可以添加一个参数用来指定在 JavaScript 中访问这个模块的名字。如果你不指定，默认就会使用这个 Objective-C 类的名字。如果类名以 RCT 开头，则 JavaScript 端引入的模块名会自动移除这个前缀。
> 必需明确的声明要给JavaScript导出的方法，否则React Native不会导出任何方法。声明通过`RCT_EXPORT_METHOD`宏来实现：
```
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
```
```
注意：React Native 还定义了一个RCT_REMAP_METHOD()宏，它可以指定 JavaScript 方法名。因为 JavaScript 端不能有同名不同参的方法存在，所以当原生端存在重载方法时，可以使用这个宏来避免在 JavaScript 端的名字冲突。
```



