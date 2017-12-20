class PermissionError extends Error { }
class FoundationalError extends Error { }
class InputError extends Error { }
class NoErrorProvided extends Error { }

/// List of all available commands one can execute. Note this is a skeleton
/// file of what will be returned at runtime when the extension is loaded.
/// Don't be alarmed.
///
/// Each function will return a promise that will be either fulfilled or
/// rejected. Rejections will return one of the errors listed above,
/// fulfillments will return json.
///
/// See comments below for details on what each command does,
/// its inputs, format of json output, and example usage.
var mflyCommands = {
 
    /// Returns information about the system and provides insight on what
    /// other commands are available to invoke on this given platform.
    /// Feel free to invoke any command where its support value is true.
    ///
    /// - Note: Pro tip, instead of checing if command is supported one can always
    /// if check the function as such
    ///
    ///   if (mflyCommands.getDownloads) {
    ///        // Command is available! No need to call this method
    ///   }
    ///
    /// - Parameters:
    ///   NONE
    ///
    /// - Returns: JSON Dictionary of the system
    ///  {
    ///     "osType": "iOS",
    ///     "supportsDownloads": true,
    ///     "supportsEmail": true,
    ///     "supportsSecondScreen": true,
    ///     "supportsOfflineMode": true,
    ///     "supportsGPS": false
    ///  }
    ///
    /// - Example usage:
    ///     try {
    ///         const jsonInfo = await mflyCommands.getSystemInfo();
    ///     } catch (e) {
    ///         console.log(e.message)
    ///     }
    ///
    /// - SeeAlso: getUserInfo(), getCurrentItem()
    getSystemInfo() {},
    
    getUploadUrl(key) {},
    
    getCurrentItem() {},
    
    showSettings() {},
    
    close() {},
    
    next() {},
    
    previous() {}
}
