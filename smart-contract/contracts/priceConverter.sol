import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
library PriceConverter {
    function getDataFeed (AggregatorV3Interface dataFeeds)internal view returns(int256){
        (, int256 answer, , , ) = dataFeeds.latestRoundData();
        return answer;
    }
    // function getConvertionRate()internal view returns(uint256){

    // }
}