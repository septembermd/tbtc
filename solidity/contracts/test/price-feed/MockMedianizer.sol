pragma solidity 0.5.17;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../../../contracts/external/IMedianizer.sol";

/// @notice A mock implementation of a medianizer price oracle
/// @dev This is used in the Keep testnets only. Mainnet uses the MakerDAO medianizer.
contract MockMedianizer is Ownable, IMedianizer {
    uint256 private value;

    constructor() public {
    // solium-disable-previous-line no-empty-blocks
    }

    function read() external view returns (uint256){
        return value;
    }

    function setValue(uint256 _value) external onlyOwner {
        value = _value;
    }
}
