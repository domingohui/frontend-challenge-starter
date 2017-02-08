export function DataListWrapper ( listOfIndex, actualDataList ) {
    this._listOfIndex = listOfIndex;
    this._actualDataList = actualDataList;
    this.length = listOfIndex.length;
    this.get = _get.bind(this);
    this.map = _map.bind(this);

    function _get ( index ) {
        return this._actualDataList[this._listOfIndex[index]];
    }

    function _map ( func ) {
        let result = [];
        for ( let i = 0; i < this.length; i++ ) {
            result.push( func(this.get(i), i) );
        }
        return result;
    }
}
