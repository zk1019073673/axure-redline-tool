import React from 'react';

import Icon from '../../components/IconComponent';

import './styles.scss';

class PrimaryControlsModule extends React.PureComponent {
    static displayName = 'PrimaryControlsModule';

    render = () => {
        const {
            controlList = []
        } = this.props;

        const controls = controlList.map((control) => {
            const {
                callback,
                isEnabled,
                path
            } = control;

            const enabledClass = isEnabled ? `${PrimaryControlsModule.displayName}__control--enabled` : '';

            return (
                <div
                    className={`${PrimaryControlsModule.displayName}__control ${enabledClass}`}
                    onClick={callback}
                >
                    <Icon
                        height={25}
                        path={path}
                        width={25}
                    />
                </div>
            )
        });

        return (
            <div className={PrimaryControlsModule.displayName}>
                {controls}
            </div>
        );
    }
}

export default PrimaryControlsModule;
