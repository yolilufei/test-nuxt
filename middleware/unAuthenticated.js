export default function(context) {
    // console.log(context);
    const {store, redirect} = context;
    if (store.state.user) {
        return redirect('/');
    }
}