import React from 'react';
import CreateUserBox from './CreateUserBox'

const CreateBtn = ({
    isClicked,openCardCreate,createNewUser,saveName,saveEmail,saveUserName,
}) => {
    return (
        <div>
            <div>
                <button onClick={openCardCreate}>{!isClicked ? 'create new user' : 'cancel'}</button>
                {isClicked && 
                    <CreateUserBox 
                        submitNewUser={createNewUser}
                        saveName={saveName}
                        saveEmail={saveEmail}
                        saveUserName={saveUserName}
                    />}
            </div>
        </div>
    );
}

export default CreateBtn;
