class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    _createNewNode(data) {
        const node = {
            data: data,
            prev: null,
            next: null,
        };
        return node;
    }

    append(data) {
        const node = this._createNewNode(data);
        if (this._length === 0) {
            // first node, all pointers to this
            this._head = node;
            this._tail = node;
        } else {
            // put on the tail
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this._length++;
        return node;
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    length() {
        return this._length;
    }

    _getFromHead(idx) {
        var node = this._head;
        while(idx--) {
            node = node.next;
        }
        return node;
    }

    _getFromTail(idx) {
        var node = this._tail;
        while (idx < this._length) {
            node = node.prev;
            idx++;
        }
        return node;
    }

    item(index) {
        if (index >= 0 && index < this._length / 2) {
            return this._getFromHead(index);
        } else if (index >= this._length / 2 && index < this._length) {
            return this._getFromTail(index+1);
        } else {
            return 'NIL';
        }
    }
}

function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    const M = Number(lines[0].trim());
    const listString = lines[1].trim();
    const listStringArr = listString.split(' ');
    const list = new DoublyLinkedList();
    for (let i=0; i < listStringArr.length; i++) {
        if (listStringArr[i].trim() !== '') {
            // console.log('append', Number(listStringArr[i]));
            list.append(Number(listStringArr[i]));
        }
    }
    if (M > list.length()) {
        console.log('NIL');
    } else {
        console.log(list.item(list.length() - M).data);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
let line = 0;
process.stdin.on("data", function (input) {
    _input += input;
    line++;
});

process.on('SIGINT', function(){
    processData(_input);
    // console.log('input ended');
    process.stdout.write('\ninput ended\n');
    process.exit();
});
