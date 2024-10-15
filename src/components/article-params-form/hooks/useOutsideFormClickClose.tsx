import { useEffect } from 'react';

type UseOutsideFormClickClose = {
	isOpen: boolean;
	setStateForm: (newValue: boolean) => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideFormClickClose = ({
	isOpen,
	rootRef,
	setStateForm,
}: UseOutsideFormClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setStateForm(false);
			}
		};
		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [setStateForm, isOpen]);
};
