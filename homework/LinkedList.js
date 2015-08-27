/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append thte current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        // Enter code here!    
            var temp = this.makeNode();
            temp.data = data;
            temp.next = this.start;
            this.start = temp
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
        // Enter code here!
        for (var current = this.start, i = 0; current !== null; current = current.next, i++){} 
            return i;
    },

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        // Enter code here!
        var node = this.start; 
            while (node !== null) {
                if (data === node.data) {
                    return true;
                }
                // incroment out node
                node = node.next;
            }
            return false;
    

        // for(var node = this.start; node; node = node.next) {
        //     if (data === node.data) {
        //         return true;
        //     }
        // }
        // return false; 
    }, //closing brace 

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        // Enter code here!
        var node = this.start; 
                while (node !== null) {
                    f(node);
                    // incroment out node
                    node = node.next;
                }
            
    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        // Enter code here!
        var i = 0 
        var node = this.start; 
            while (node !== null) {
                    if (node.data === data) {
                        return [i];
                    } else {
                    // incroment out node
                    node = node.next;
                    }
                i++;
            }
            return false;
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
        var a = 0 
        var node = this.start; 
            while (node !== null) {
                    if (node.data === data) {
                        return [i];
                    } else {
                    // incroment out node
                    node = node.next;
                    }
                a++;
            }
            return false;
    },

  

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt: function(i, data) {
        // Enter code here!
             var previousNode;
             var newNode = this.makeNode();
             newNode.data = data;
             var current = this.start;
             var index = 0;
             if(i > this.length() + 1){
                 return "index out of range";
             }
             if(i === 0){
                 this.insertAtHead(data);
             }
             while(current !== null){
                 if(index === i - 1){
                     newNode.next = current.next;
                     current.next = newNode;
                     if(i === this.length() - 1){
                         this.end = newNode;
                     }
                     return "inserted";
                 }
                 index++;
                 current = current.next;
             }
         },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
         var previousNode;
             var deleteNode = this.splice();
             deleatNode.data = data;
             var current = this.start;
             var index = 0;
             if(i > this.length() + 1){
                 return "index out of range";
             }
             if(i === 0){
                 this.remove(data);
             }
             while(current !== null){
                 if(index === i - 1){
                     deleteNode.next = current.next;
                     current.next = newNode;
                     if(i === this.length() - 1){
                         this.end = deleteNode;
                     }
                     return "inserted";
                 }
                 index++;
                 current = current.next;
             }
         },
    //     var node = this.start; 
    //         while (node !== null) {
    //                 if (data === node.data) {
    //                     data.splice(data);
    //                 } else {
    //                 // incroment out node
    //                 node = node.next;
    //                 }
    //         }
    // },
} //end of the list.prototyp function 



/* LinkedList initialization */
var LinkedList = new List();
/* We're creating our "base" linkedList */
var i = 2;
while(i <= 20) {
    LinkedList.addAtEnd(i);
    i+=2;
}
/* print */
LinkedList.print();
/* Run your functions here */
// Insert functions here to test.
/* Print again to see your results */
function accessor (node) {
    console.log(node.data + "has been accessed.")
};

// var index = linkedList.indexOf (8) {
//     console.log("index of 8 is - " + index)
// };

var remove = LinkedList.delete (4);
    console.log(delete + "list removed");


LinkedList.print();


