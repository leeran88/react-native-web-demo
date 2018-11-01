import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from './Demo.styles';
import {getRandomColor} from './Helpers';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.renderItem = this.renderItem.bind(this);

        this.state = {
            items: []
        }
    }

    addItem() {
        const items = this.state.items;
        items.push({color: getRandomColor()});

        this.setState({items: items});
    }

    renderItem(item, number) {
        return (
            <View key={number} style={[styles.item, {backgroundColor: item.color}]}>
                <Text>Item number {number}</Text>
            </View>
        )
    }

    render() {
        return (
                <ScrollView>
                    <View style={styles.container}>
                        <Button title={'Add Item'} onPress={this.addItem}/>
                        <View style={styles.list}>
                            {this.state.items.map((item, i) => this.renderItem(item, i + 1))}
                        </View>
                    </View>
                </ScrollView>
        )
    }
}


//
// render() {
//     return (
//         <ThemeProvider>
//             <ScrollView>
//                 <View style={styles.container}>
//                     <Button onPress={this.addItem}>Add Item</Button>
//                     <View style={styles.list}>
//                         {this.state.items.map((item, i) => this.renderItem(item, i + 1))}
//                     </View>
//                 </View>
//             </ScrollView>
//         </ThemeProvider>
//     )
// }

