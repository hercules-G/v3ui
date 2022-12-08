export const address = '0x8589Cf382d82fdDa237eFd75CEb493C4fe79A5ED';
export const abi = [
  'error InvalidParameter(string parameter, string reason)',
  'error PositionOutOfBounds()',
  'error Unauthorized(address addr)',
  'error ValueAlreadyInSet()',
  'event CollateralConfigured(address indexed collateralType, tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18) config)',
  'function configureCollateral(tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18) config)',
  'function getCollateralConfiguration(address collateralType) view returns (tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18))',
  'function getCollateralConfigurations(bool hideDisabled) view returns (tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18)[])',
  'function getCollateralPrice(address collateralType) view returns (uint256)',
];
