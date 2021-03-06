
function HeaderItem({Icon, title}) {
    return (
        <div className='group'>
            <Icon className='h-8 mb-1' />
            <p className="opacity-100 hover:opacity-100 tracking-widest">{title}</p>
        </div>
    );
}
export default HeaderItem;   