import ExpoModulesCore
import CoreMIDI

public class ReactNativeMidiModule: Module {
  private var midiClient = MIDIClientRef()
  private var midiOutputPort = MIDIPortRef()
  private var midiNetworkSession = MIDINetworkSession.default()

  public func definition() -> ModuleDefinition {
    Name("ReactNativeMidi")

    OnCreate {
      MIDIClientCreate("MIDI Client" as CFString, nil, nil, &midiClient)
      MIDIOutputPortCreate(midiClient, "MIDI Output Port" as CFString, &midiOutputPort)
      midiNetworkSession.isEnabled = true
      midiNetworkSession.connectionPolicy = .anyone
    }

    AsyncFunction("sendMidiMessage") { (message: [UInt8]) in
      var packetList = MIDIPacketList()
      let packet = MIDIPacketListInit(&packetList)
      MIDIPacketListAdd(&packetList, MemoryLayout.size(ofValue: packetList), packet, 0, 3, message)
      MIDISend(midiOutputPort, midiNetworkSession.destinationEndpoint(), &packetList)
    }
  }
}
