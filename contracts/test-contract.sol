/* NOTE: The following code compiled successfully with solc 0.4.21.  It fails with solc 0.5.0 with the following error:

    UnimplementedFeatureError: Encoding type "struct TestNestedStructInMapping.structNested memory" not yet implemented.

    Compilation failed. See above.
    Truffle v5.0.0-beta.2 (core: 5.0.0-beta.2)
    Solidity v0.5.0 (solc-js)
    Node v8.11.1
*/


pragma solidity ^0.5.0;

contract TestNestedStructInMapping {

    // The struct that is nested.
    struct structNested {
        uint dummy;
    }

    // The struct that holds the nested struct.
    struct structMain {
        structNested gamePaymentsSummary;
    }

    // The map that maps a game ID to a specific game.
    mapping(uint256 => structMain) public s_mapOfNestedStructs;
}


