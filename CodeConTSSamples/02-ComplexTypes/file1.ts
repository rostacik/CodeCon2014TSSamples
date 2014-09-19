//casting
var span: HTMLElement = document.createElement('span');
span.id = 'abc';

var elem: HTMLElement = <any>3;
var num: Number = <any>document.createElement('div');

//declare param
function funcPointerParam(fnPointer: () => void): void {
    fnPointer();
}

function objParam(params: { id: string; name?: string; surname?: string; age?: number }): void {
    var id = params.id;
    var name = params.name;
}

interface IObjParamInterface {
    /**record id*/
    id: string;
    /**value 1*/
    val1: string;
    /**value 2*/
    val2: string;
}

function paramInterface(params: IObjParamInterface) {
    var id = params.id;
}

/** some commented function
@param params object with values
@return some stupid value
*/
function commentedFunction(params: {
    /**record id*/
    id: string;
    /**record name*/
    name?: string;
    /**record surname*/
    surname?: string;
    /**record age*/
    string; age?: number
}) {
    var a = params.id;
    var b = params.name;
    var c = params.surname;
}