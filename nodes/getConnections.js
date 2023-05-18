
module.exports = function(RED) {
    function getConnections(config) {
        RED.nodes.createNode(this,config);
        let node = this;
        node.on('input', async function(msg) {
            try{
                node.status({ fill: 'grey', shape: 'dot', text: 'Getting...' });
                const nodeRedRuntime = RED.server;
                const connections = nodeRedRuntime._connections;
                const numConnections = connections;
                msg.payload = numConnections;
                node.status({ fill: 'blue', shape: 'dot', text: `${numConnections}` });
                node.send(msg);
            
            }
            catch (e) {
                node.error(e, msg);
                node.status({ fill: 'red', shape: 'dot', text: 'Error Generic' });
            }
        });
    }
    RED.nodes.registerType("getConnections",getConnections);
}
