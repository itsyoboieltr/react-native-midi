package expo.modules.midi

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeMidiModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ReactNativeMidi")

    AsyncFunction("sendMessage") { message: ByteArray ->
      message
    }
  }
}
