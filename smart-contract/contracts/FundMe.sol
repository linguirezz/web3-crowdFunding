// pragma
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.27;
// import
import '@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol';
import './priceConverter.sol';
// error
error FundMe__notOwner();
// contract
contract FundMe{
    using PriceConverter for uint256;
    uint256 private constant MINIMUM_AMOUNT=1000000000000000;
    address private immutable i_owner;
    AggregatorV3Interface private immutable i_pricefeed;
    constructor(address owner,AggregatorV3Interface pricefeed){
        i_owner = owner;
        i_pricefeed = AggregatorV3Interface(pricefeed);
    }

    
    function  fund()public payable{
        if(msg.value < MINIMUM_AMOUNT){
            revert FundMe__notOwner();
        }
        
    } 
}
// library
// type declaration
// functions
// pure/view function