
import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import Report from './Report';
import colors from '../assets/colors';
import { updateHealthData } from './actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { strings } from '../locales/i18n';

class Diagnosys extends Component {
    var
    constructor() {
        super();
        this.state = {
            weekView: true,
        };
    }

    updateCalendarState = () => {
        this.setState({
            weekView: !this.state.weekView,
        });
    };

    render() {
        const {
            healthData: { symptomsDate, tabIdx, symptomsMarkedDays },
        } = this.props;

        return (
            <>
                <SafeAreaView style={styles.status_bar} />
                <View style={styles.header}>
                    <View style={styles.title_container}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/home/logo.png')}
                        />
                        <Text style={styles.title}>{strings('diagnosis.text')}</Text>
                        <Report tabLabel={strings('diagnosis.text')} />
                    </View>
                </View>
                
            </>
        );
    }
}

const styles = StyleSheet.create({
    status_bar: {
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.card_border,
        justifyContent: 'space-between',
    },
    title_container: {
        flexDirection: 'row',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    title: {
        fontSize: 24,
        color: colors.section_title,
        fontWeight: '500',
    },
});

Health.propTypes = {
    updateHealthData: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        healthData: state.healthReducer,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateHealthData
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Diagnosys);
