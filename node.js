module.exports = function(RED) {
    function TwittrendNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        // node.on('input', function(msg) {
        //     msg.payload = msg.payload.toLowerCase();
        //     node.send(msg);
        // });
        node.on('input', function(msg) {
            var phrase = 'ズンズンズンズンドコ';
            var generated = '';
            do {
                var choice = ['ズン', 'ドコ'][Math.random() * 2 | 0];
                msg.payload = choice;
                node.send(msg);
                generated = (generated + choice).substr(- phrase.length);
            } while (generated !== phrase);
            msg.payload = 'キ・ヨ・シ！';
            node.send(msg);
        });
    }
    RED.nodes.registerType("twittrend",TwittrendNode);
}
