const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) =>{
    const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false );

    var flag = false;

    invalidEmails.map(email => {
        if(email !== '')
            flag = true; 
    })

    if(flag && invalidEmails)
        return `These emails are invalid : ${invalidEmails}`;
    
    return null;
}