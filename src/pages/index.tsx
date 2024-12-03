import { Button } from '@nextui-org/react';

function Home() {
	return (
		<div className="p-4 space-y-2">
			<div className="bg-primary">Hello world!</div>
			<div className="flex gap-4 items-center bg-red-500">
				<div className="btn btn-primary">Daisyui button</div>
				<Button>Nextui Button!</Button>
			</div>
		</div>
	);
}

export { Home as default };
